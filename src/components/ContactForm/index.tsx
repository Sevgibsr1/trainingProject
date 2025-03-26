import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { BaseContactForm, ContactFormData } from "../BaseContactForm"

export class ContactForm extends BaseContactForm {
  render() {
    const fields = this.getFormFields()

    return (
      <Card>
        <CardHeader>
          <CardTitle>Mesaj Gönderin</CardTitle>
          <CardDescription>Formu doldurarak bize ulaşabilirsiniz</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...this.form}>
            <form onSubmit={this.form.handleSubmit(this.onSubmit)} className="space-y-6">
              <FormField
                control={this.form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{fields.name.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={fields.name.placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={this.form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{fields.email.label}</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={fields.email.placeholder} 
                        type={fields.email.type} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={this.form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{fields.subject.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={fields.subject.placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={this.form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{fields.message.label}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={fields.message.placeholder}
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-[#062e51] hover:bg-blue-900">
                Gönder
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    )
  }

  // Override base submit method if needed
  protected onSubmit(values: ContactFormData) {
    super.onSubmit(values)
    // Add additional submit logic here
  }
} 