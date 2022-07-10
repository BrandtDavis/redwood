import { MetaTags } from '@redwoodjs/web'
import { Form, Label, TextAreaField, TextField, Submit } from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Form onSubmit={onSubmit}>
        <Label htmlFor="name">Name</Label>
        <TextField name="name" />

        <Label htmlFor="email">Email</Label>
        <TextField name="email" />

        <Label htmlFor="message">Message</Label>
        <TextAreaField name="message" />
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
