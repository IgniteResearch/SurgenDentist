#!/bin/bash 

# Validate Change Log
 if [[ $(git status | grep change-me ) == *"change-me.txt"* ]]; then 

    # Create time stamp
    timestamp=$(date +"%Y-%m-%d-%H-%M-%S")

    ## Running  Yarn build  command to generates static content into the build directory and can be served using any static contents hosting service in our case we are github pages 
    yarn build

    # the directory of the script
    DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

    # the temp directory used, within $DIR
    # omit the -p parameter to create a temporal directory in the default location
    WORK_DIR=`mktemp -d -p "$DIR"`

    # check if tmp dir was created
    if [[ ! "$WORK_DIR" || ! -d "$WORK_DIR" ]]; then
      echo "Could not create temp dir"
      exit 1
    fi

    # copying the tmp dir to dev environment 
    cp -R build/. $WORK_DIR/

    # navigate to new directory 
    cd $WORK_DIR/

    # initaited git 
    git init

    # Added code to stage 
    git add .

    # Commited code with  the timestamp 
    git commit -m $timestamp

    # Added surgen dentist git repo 's remote url
    git remote add origin https://github.com/surgendentist/surgendentist.github.io.git

    # created a branch "gh-pages"
    git branch -M gh-pages

    # pushed new code to remote url 
    git push -u origin gh-pages  --force

    # clear console 
    clear 


    ## code deployed to new url 
    echo -e '\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n                                                                                    \n                        https://surgendentist.github.io/                         \n                                                                                       \n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n\n'

    # Get User input 
    echo -e '\n\n'
    echo 'Hello !  I believe Alot of changes are done to the website, Deployed changes to above URL - Have a look and if you feel all good to proced type  "YES"  below and hit enter '
    echo -e '\n\n\n'
    read var1 
    echo 'proceed futher with changes'  
    
    # navigate to parent Dir 
    cd .. 


    # deletes the temp directory
    function cleanup {      
      rm -rf "$WORK_DIR"
      echo "Deleted temp working directory $WORK_DIR"
    }

    # register the cleanup function to be called on the EXIT signal
    trap cleanup EXIT

    # removing temp dir traces 
    rm -r -f $WORK_DIR

    # Removed cached dir
    git rm --cached $WORK_DIR

    # Added code to new branch 
    git add . 

    # Create commit 
    git commit -m $timestamp

    # push changes to develop branch 
    git push -u origin develop

    # created a branch 
    git checkout -b $timestamp

    # push code to new branch 
    git push -u origin $timestamp

    # chnaging back to develop branch 
    git checkout develop


else

    echo -e '\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n                                                                                    \n      You can not cheat me , Leave lazyness and Go Update file with all  chnages done and re-trigger  Deploy-dev-server.sh again                    \n                                                                                       \n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n\n'

    sleep 10

fi


