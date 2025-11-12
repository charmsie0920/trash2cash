import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link";


export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-1", className)} {...props}>
      <FieldGroup className="space-y-0.2">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input id="name" type="text" placeholder="John Doe" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="street">Street</FieldLabel>
          <Input id="street" type="text" placeholder="123 Main St" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="city">City</FieldLabel>
          <Input id="city" type="text" placeholder="Anytown" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="state">State</FieldLabel>
          <Input id="state" type="text" placeholder="CA" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="postcode">Postcode</FieldLabel>
          <Input id="postcode" type="text" placeholder="12345" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" required />
          <FieldDescription className="mt-0 text-xs text-muted-foreground">
            Must be at least 8 characters long.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
          <Input id="confirm-password" type="password" required />
          <FieldDescription className="mt-0 text-xs text-muted-foreground">
            Please confirm your password.</FieldDescription>
        </Field>
        <Field>
          <Button type="submit">Create Account</Button>
        </Field>
        <Field>
          <FieldDescription className="px-6 text-center space-y-0.5">
            Already have an account?{" "}
            <Link href="/login" className="underline text-blue-600 hover:text-blue-800">
              <button>Login</button>
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
