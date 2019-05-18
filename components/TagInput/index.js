import React from 'react'
import Tags from 'react-native-tags'
import { Chip } from 'react-native-paper'

const TagInput = (props) => (
    <Tags
        textInputProps={{
            placeholder: "Any type of animal"
        }}
        initialTags={props.tag_list}
        // onChangeTags={tags => console.log(tags)}
        onTagPress={(index, tagLabel, event, deleted) =>
            console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
        }
        containerStyle={{ justifyContent: "center" }}
        inputStyle={{ backgroundColor: "white" }}
        renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
            <Chip key={`${tag}-${index}`} onPress={onPress}>
                {tag}
            </Chip>
        )}
    />
);

export default TagInput