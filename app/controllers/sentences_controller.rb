class SentencesController < ApplicationController
  before_action :set_sentence, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:welcome,:coming_soon]

  def welcome
    redirect_to sentences_path if signed_in?
  end

  def terms_and_condtions
    # page is created by for now let use the free services from termsfeed they hosted the terms
    redirect_to 'https://www.termsfeed.com/live/63999ede-eb51-48e9-971d-e421680a87e6'
  end

  def coming_soon
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
    @sentences = current_user.sentences.all.reverse

    @root_sentences = current_user.sentences.all.where(group: "").reverse

    if params['group']
      @body_class='group_selected' 
      @folder = params['group']
      @sentences = current_user.sentences.all.where(group: @folder).reverse
    else
      @sentences = @root_sentences
    end

    @sentence = current_user.sentences.build
    @groups = current_user.sentences.all.distinct.pluck(:group).push('New folder') 
  end

  # post /api/new (JSON)
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
    @groups = current_user.sentences.all.distinct.pluck(:group).push('New folder') 
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
end
