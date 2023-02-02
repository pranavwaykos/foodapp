import SanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";
export const client = SanityClient({
    projectId:"cjezfk6k",
    dataset:"production",
    apiVersion:"2023-01-25",
    useCdn:true,
    token:"skMDEleBJTAAjZ1oOaXc2U93vUOdVsZ1BZaHm6wHQqAocMBxDHYCRfC01fGJQoJcz61gkRA2rBz6K0CcePjCrw5CbLOKy26EcyU0HtMturL114WKZs0lISS39aT6pYK6U66smzAJt7uXxmNB4vcLh60JWvW1J8c7lwvmY5nZ7O4yJkZyCsg4"
})


const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
