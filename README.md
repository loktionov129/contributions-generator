# contributions-generator

Generate dates.txt using this app

Put dates.txt and paint.sh(from public directory) to your repository

Run script paint.sh

Push generated commits to remote


## Example

```shell script
mkdir -p ~/projects
cd ~/projects

### --- Optional:start
git clone git@github.com:my-repositories/contributions-generator.git
cd contributions-generator
yarn install
yarn start
cd ../
### --- Optional:end

# Open http://localhost:3000/ if you want to generate the contributions locally
# Or open https://my-repositories.github.io/contributions-generator/ if you did not complete the previous optional step
# Then draw any activity graph and click the "Generate!" button

mkdir test-graffiti-2020
cd test-graffiti-2020
git init

# Replace YOUR_USER_NAME with your github's login
git remote add origin git@github.com:YOUR_USER_NAME/test-graffiti-2020.git

cp ~/Downloads/dates.txt ./
curl https://raw.githubusercontent.com/my-repositories/contributions-generator/master/public/paint.sh --output paint.sh
bash paint.sh
```
