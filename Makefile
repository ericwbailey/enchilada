#
# Installs and runs the project
# https://matthias-endler.de/2017/makefiles/
# https://github.com/ericwbailey/enchilada/wiki/Global-Project-Variables
#


start: replace nvm npm build
	@printf '\nℹ️  Project updated and built.\nMore info: https://github.com/ericwbailey/enchilada/wiki\n'

build:
	gulp

npm:
	npm install

nvm:
	nvm use 7

replace:
	# Project
	ack -l 'projectTitleFull' | xargs sed -i 's/projectTitleFull/*/g'
	ack -l 'projectTitleShort' | xargs sed -i 's/projectTitleShort/*/g'
	ack -l 'projectAuthorName' | xargs sed -i 's/projectAuthorName/*/g'
	ack -l 'projectAuthorEmail' | xargs sed -i 's/projectAuthorEmail/*/g'
	ack -l 'projectAuthorURL' | xargs sed -i 's/projectAuthorURL/*/g'
	ack -l 'projectDescriptionFull' | xargs sed -i 's/projectDescriptionFull/*/g'
	ack -l 'projectDescriptionShort' | xargs sed -i 's/projectDescriptionShort/*/g'
	ack -l 'projectURL' | xargs sed -i 's/projectURL/*/g'
	ack -l 'projectLanguage' | xargs sed -i 's/projectLanguage/*/g'
	ack -l 'projectLicense' | xargs sed -i 's/projectLicense/*/g'
	ack -l 'projectColorTheme' | xargs sed -i 's/projectColorTheme/*/g'
	ack -l 'projectColorBackground' | xargs sed -i 's/projectColorBackground/*/g'
	# GitHub
	ack -l 'githubTitle' | xargs sed -i 's/githubTitle/*/g'
	ack -l 'githubAuthor' | xargs sed -i 's/githubAuthor/*/g'
	# Social Media
	ack -l 'twitterSite' | xargs sed -i 's/twitterSite/*/g'
	ack -l 'twitterAuthor' | xargs sed -i 's/twitterAuthor/*/g'
	# IDs
	ack -l 'idAppChrome' | xargs sed -i 's/idAppChrome/*/g'
	ack -l 'idAppiOS' | xargs sed -i 's/idAppiOS/*/g'
	ack -l 'idGoogleAnalytics' | xargs sed -i 's/idGoogleAnalytics/*/g'
