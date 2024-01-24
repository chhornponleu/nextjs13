while getopts d: flag
do
    case "${flag}" in
        d) directory=${OPTARG};;
    esac
done

# build
cd ../
rm -rf dist/
yarn && yarn env:prod
npx expo export
cd expo-updates-server

# copy dist to updates
rm -rf ./updates/$directory/ 
rsync -av ../dist/ ./updates/$directory
mkdir -p /var/task/expo-updates-server/updates/$directory 

# copy expoConfig
node ./scripts/exportClientExpoConfig.js > ./updates/$directory/expoConfig.json
