component="$1"
file="$2"
storybook_name="$3"

if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <component-string> <file-string> <storybook_file-string"
    exit 1
fi

cp -r React-Component/  "src/Components/$file/$component/"  && cd "src/Components/$file/$component/"


for file in *Component*; do
    [ -e "$file" ] || continue

    new="${file//Component/$component}"
    mv "$file" "$new"

    if [[ "$new" == *.scss ]]; then
          lowercase_component=$(echo "$component" | tr '[:upper:]' '[:lower:]')
          sed -i '' "s/component/$lowercase_component/g" "$new" 
    else
        
         sed -i '' "s/Component/$component/g" "$new" 
    fi
done

sed -i '' "s|Storybook_File|$storybook_name|g" "$component.stories.tsx"
lowercase_component=$(echo "$component" | tr '[:upper:]' '[:lower:]')
sed -i '' "s|styles.component|styles.$lowercase_component|g" "$component.tsx"

