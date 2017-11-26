#
# Installs and runs the project
# https://matthias-endler.de/2017/makefiles/
# https://github.com/ericwbailey/enchilada/wiki/Global-Project-Variables
#


start: replace nvm npm build
	@printf '\nℹ️  Project updated and built. More info: https://github.com/ericwbailey/enchilada/wiki\n'

build:
	gulp

npm:
	npm install

nvm:
	nvm use 7

replace:
	# Project
	sed -i -e 's/$$projectFullTitle/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$projectShortTitle/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$projectAuthorName/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$projectAuthorEmail/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$projectAuthorURL/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$projectFullDescription/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$projectFullDescription/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$projectShortDescription/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$projectURL/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$projectLanguage/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$projectLicense/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$projectThemeColor/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$projectBackgroundColor/*/g' $(find . -type f | grep -vE "Makefile|.git")
	# GitHub
	sed -i -e 's/$$githubTitle/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$githubAuthor/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$githubAuthor/*/g' $(find . -type f | grep -vE "Makefile|.git")
	# Social Media
	sed -i -e 's/$$siteTwitter/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$authorTwitter/*/g' $(find . -type f | grep -vE "Makefile|.git")
	# Windows
	sed -i -e 's/$$jumpListTask/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$jumpListPage/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$jumpListIcon/*/g' $(find . -type f | grep -vE "Makefile|.git")
	# Apps
	sed -i -e 's/$$iosAppID/*/g' $(find . -type f | grep -vE "Makefile|.git")
	sed -i -e 's/$$chromeAppID/*/g' $(find . -type f | grep -vE "Makefile|.git")
	# Analytics
	sed -i -e 's/$$googleAnalyticsID/*/g' $(find . -type f | grep -vE "Makefile|.git")
