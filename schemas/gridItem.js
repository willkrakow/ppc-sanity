export default {
    title: "Grid item",
    type: "object",
    name: "gridItem",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: "caption",
            title: "Caption",
            type: "string",
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "link",
            title: "Link",
            type: "url",
        },
        {
            name: "subtitle",
            title: "Subtitle",
            type: "string",
        },
        {
            name: "altText",
            title: "Alt text",
            type: "string",
            validation: Rule => Rule.required()
        }
    ]
}