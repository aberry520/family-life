import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", `${process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string}`);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setFormValues({
        name: "",
        email: "",
        message: "",
      });
    } else {
      console.error(result);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have any questions or want to learn more about our church? Contact us using the form below.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-2">
            <Input
              type="text"
              placeholder="Name"
              className="max-w-lg"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              required={true}
            />
            <Input
              type="email"
              placeholder="Email"
              className="max-w-lg"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required={true}
            />
            <Textarea
              placeholder="Message"
              className="min-h-[100px] max-w-lg"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              required={true}
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
