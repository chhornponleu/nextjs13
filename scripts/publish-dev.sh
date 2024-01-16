while getopts d: flag
do
    case "${flag}" in
        d) directory=${OPTARG};;
    esac
done

# build
cd ../
rm -rf dist/
yarn && yarn env:dev
npx expo export
cd expo-updates-server

# copy dist to updates
rm -rf ./updates/$directory/
cp -r ../dist/ updates/$directory

# copy expoConfig
node ./scripts/exportClientExpoConfig.js > ./updates/$directory/expoConfig.json