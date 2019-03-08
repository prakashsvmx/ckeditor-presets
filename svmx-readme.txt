Adding Plugins:
Download from 
https://ckeditor.com/cke4/addon/sourcedialog

* along with add-on dependencies

unpack and add to plugins folder.
-ensure extracted folder has plugin.js at the root level

Add/modify an entry into svmx-build-config.js
Add/modify an entry into svmx-ckeditor-config.js



To Build:

rm -rf build

# modify the build.sh - the last few lines to point to your projects public folder.

e.g
echo ""
echo "Build created into the \"build\" directory."
echo "Copying to ..."
(rm -rf /Users/prakashsnethilvel/Documents/SFMDesigner/GIT/designer-2.0/public/ckeditor)
(cp -R  build/4.11.3/svmx/ckeditor /Users/prakashsnethilvel/Documents/SFMDesigner/GIT/designer-2.0/public/)
echo ""

