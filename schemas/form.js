export default {
    name: "form",
    type: "object",
    title: "Form",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "subtitle",
            type: "text",
            title: "Subtitle",
        },
        {
            name: "formType",
            type: "string",
            title: "Form Type",
            options: {
                list: [
                    { title: "Contact", value: "contact" },
                    { title: "Newsletter", value: "subscribe" },
                    { title: "Donation", value: "donation" },
                    { title: "Pod application", value: "podApplication" }
                ]
            },
            validation: Rule => Rule.required()
        }
    ]
}