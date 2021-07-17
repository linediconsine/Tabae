class SentencesController < ApplicationController
  before_action :set_sentence, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:welcome,:coming_soon,:terms_and_conditions,:privacy_policy,:token_access]
  skip_before_action :verify_authenticity_token, only: [:apicreate,:token_access]

  def welcome
    redirect_to sentences_path if signed_in?
  end

  def terms_and_conditions
    # page is created by for now let use the free services from termsfeed they hosted the terms
    redirect_to 'https://www.termsfeed.com/live/63999ede-eb51-48e9-971d-e421680a87e6'
  end

  def privacy_policy
    # page is created by for now let use the free services from termsfeed they hosted the terms
    redirect_to 'https://www.termsfeed.com/live/33f23ca0-f3c7-4866-a6d1-8e4f290605bf'
  end

  def disclaimer
  end


  
  def coming_soon
  end


  # GET /dashboard.json
  def dashboard
    @sentences = current_user.sentences.all.reverse

    respond_to do |format|
      format.json { render json:  @sentences.to_json()  }
    end
  end

    
  # DELETE /sentences/1
  # DELETE /sentences/1.json
  def destroy
    @sentence.destroy
    respond_to do |format|
      format.html { redirect_to sentences_url, notice: t('sentence_deleted') }
      format.json { head :no_content }
    end
  end

  # GET /sentences
  # GET /sentences.json
  def index
    create_token(current_user)

    #session[:current_user_id]
    @domain = request.base_url

    @sentences = current_user.sentences.all
    @root_sentences = current_user.sentences.all.where(group: ["Home",""])

    if params['order']
      if params['order'] == "first"
        session[:order] = "first"
      else
        session[:order] = "last"
      end
    end

    if session[:order] == "first"
      @root_sentences = @root_sentences.reverse
      @sentences = @sentences.reverse
    end

    @groups = current_user.sentences.all.distinct.pluck(:group)
    @folders_name = current_user.sentences.all.distinct.pluck(:group)

    if @groups.exclude?('Home')
      @groups.push('Home')
    end
    if @groups.exclude?('New folder')
      @groups.push('New folder')
    end
   

    if params['group']
      @body_class='group_selected' 
      @folder = params['group']
      @sentences = current_user.sentences.all.where(group: @folder).reverse
    else
      @sentences = @root_sentences
    end

    @sentence = current_user.sentences.build
  end

  # post /api/new (JSON)

  def get_api_usertoken
    request.format = :json
    if current_user.uuid == nil
      @current_user.uuid = SecureRandom.uuid
      @current_user.save()
    end

    respond_to do |format|
      format.json { render json: current_user.to_json(:only => [ :email, :uuid ])  }
    end
  end

  def token_access
    #@tk = params['tk']

    crypt = ActiveSupport::MessageEncryptor.new(Settings.secret[0..31])
    decrypted_data = crypt.decrypt_and_verify(params['tk'])

      @token =  decrypted_data.split("@@@")[0]
      @email =  decrypted_data.split("@@@")[1]

    @user_temptative = User.where(email: @email,uuid:@token)
    
    if  @user_temptative.exists?

      sign_in(@user_temptative[0])
      redirect_to action: "index"
    else
      redirect_to action: "index"
    end

  end



  def apicreate
    request.format = :json
    
    @api_sentence =  params['sentence']
    @sentence = current_user.sentences.new()
    
    @sentence.sentence = @api_sentence 
    @sentence.name = @api_sentence 

    if @sentence.save
       respond_to do |format|
        format.json { render :show, status: :created, location: @sentence }
       end
    else
      respond_to do |format|
        format.json { render json: @sentence.errors, status: :unprocessable_entity }
      end
    end
  end

  
  # GET /sentences/1
  # GET /sentences/1.json
  def show
    redirect_to action: "index"
  end

  # GET /sentences/new
  def new
    @sentence = current_user.sentences.build
  end

  # GET /sentences/1/edit
  def edit
    @groups = current_user.sentences.all.distinct.pluck(:group) 
    @actual_group = Sentence.find(params["id"]).group

    if @groups.exclude?('Home')
      @groups.push('Home')
    end
    if @groups.exclude?('New folder')
      @groups.push('New folder')
    end

  end

  # POST /sentences
  # POST /sentences.json
  def create
    @sentence = current_user.sentences.build(sentence_params)
  
    respond_to do |format|
      if @sentence.save
        format.html { redirect_to @sentence, notice: 'Ho aggiunto la frase a quelle salvate.' }
        format.json { render :show, status: :created, location: @sentence }
      else
        format.html { render :new }
        format.json { render json: @sentence.errors, status: :unprocessable_entity }
      end
    end
  end


  # PATCH/PUT /sentences/1
  # PATCH/PUT /sentences/1.json
  def update
    respond_to do |format|
      if @sentence.update(sentence_params)
        format.html { redirect_to @sentence, notice: 'Frase aggiornata.' }
        format.json { render :show, status: :ok, location: @sentence }
      else
        format.html { render :edit }
        format.json { render json: @sentence.errors, status: :unprocessable_entity }
      end
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sentence
      @sentence = Sentence.find(params[:id])
    end


    # Never trust parameters from the scary internet, only allow the white list through.
    def sentence_params
      params.require(:sentence).permit(:name, :sentence, :color, :group)
    end

    def create_token(_user)
      if _user.uuid == nil
        _user.uuid = SecureRandom.uuid
        _user.save()
      end
    end

    def authenticate
      authenticate_or_request_with_http_basic do |email, password|
        user = User.where(email: email).first
        !user.nil? && user.valid_password?(password)
      end
      warden.custom_failure! if performed?
    end

end
