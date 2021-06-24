![tabae logo](https://github.com/linediconsine/tabae/blob/main/public/apple-icon-152x152.png?raw=true)

## Tabae is an open-source project voice synthetized dashboard.
### This project is born out of necessity for helping a friend who loses his voice to communicate.

See the [live service](https://www.tabae.cloud)

##### Prerequisites

The setup steps expect the following tools installed on the system.

- Github
- Ruby [2.7.0](https://github.com/organization/project-name/blob/master/.ruby-version#L1)
- Rails [6.0.3.7](https://github.com/organization/project-name/blob/master/Gemfile#L12)

##### 1. Check out the repository

```bash
git clone https://github.com/linediconsine/tabae.git
```

##### 2. Create database.yml file

Copy the sample database.yml file and edit the database configuration as required.

```bash
cp config/database.yml.sample config/database.yml
```

##### 3. Create and setup the database

Run the following commands to create and setup the database.

```ruby
bundle exec rake db:create
bundle exec rake db:migrate
```

```bash
yarn install
```

##### 4. Start the Rails server

You can start the rails server using the command given below.

```ruby
rails s
```

And now you can visit the site with the URL http://localhost:3000
