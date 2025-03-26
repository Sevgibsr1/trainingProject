import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

// Base form schema
export const baseContactSchema = z.object({
  name: z.string().min(2, {
    message: "İsim en az 2 karakter olmalıdır.",
  }),
  email: z.string().email({
    message: "Geçerli bir email adresi giriniz.",
  }),
  subject: z.string().min(5, {
    message: "Konu en az 5 karakter olmalıdır.",
  }),
  message: z.string().min(10, {
    message: "Mesaj en az 10 karakter olmalıdır.",
  }),
})

export type ContactFormData = z.infer<typeof baseContactSchema>

export class BaseContactForm {
  protected form = useForm<ContactFormData>({
    resolver: zodResolver(baseContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  protected onSubmit(values: ContactFormData) {
    console.log(values)
    // Base submit işlemi
  }

  protected getFormFields() {
    return {
      name: {
        label: "Adınız Soyadınız",
        placeholder: "Adınız Soyadınız",
      },
      email: {
        label: "Email Adresiniz",
        placeholder: "ornek@email.com",
        type: "email",
      },
      subject: {
        label: "Konu",
        placeholder: "Mesajınızın konusu",
      },
      message: {
        label: "Mesajınız",
        placeholder: "Mesajınızı buraya yazın...",
      },
    }
  }
} 