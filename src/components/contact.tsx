import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have any questions or want to learn more about our church? Contact us using the form below.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col gap-2">
            <Input
              type="text"
              placeholder="Name"
              className="max-w-lg"
            />
            <Input
              type="email"
              placeholder="Email"
              className="max-w-lg"
            />
            <Textarea
              placeholder="Message"
              className="min-h-[100px] max-w-lg"
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
