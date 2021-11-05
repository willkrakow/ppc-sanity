export default {
    name: "imageGrid",
    title: "Image grid",
    type: "object",
    fields: [
        {
            title: "Primary title",
            name: "primaryTitle",
            type: "string",
        },
        {
            title: "Secondary title",
            name: "secondaryTitle",
            type: "string",
        },
        {
            title: "backgroundColor",
            name: "backgroundColor",
            type: "colorlist",
            options: {
                list: [
                    { title: "White", value: "white" },
                    { title: "Black", value: "black" },
                    { title: "Gray", value: "gray" },
                    { title: "Blue", value: "blue" },
                    { title: "Green", value: "green" },
                ]
            },
        },
        {
            title: "Columns",
            name: "columns",
            type: "number",
            validation: Rule => Rule.min(1).max(6).required()
        },
        {
            title: "Mobile columns",
            name: "mobileColumns",
            type: "number",
            validation: Rule => Rule.min(1).max(3).required()
        },
        {
            title: "Grid content",
            name: "images",
            type: "array",
            of: [{type: "gridItem"}],
            validation: Rule => Rule.min(2).required(),
        }
    ],
}