import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  
const CustomInput = ({form, name, label, placeholder}) => {
  return (
    <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
            <div className='form-item'>
                <FormLabel className='form-label'>
                    Email
                </FormLabel>
                <div className='flex w-full flex-col'>
                    <FormControl>
                        <Input 
                            placeholder='Enter your email'
                            className='input-class'
                            {...field}
                        />
                    </FormControl>
                    <FormMessage className='form-message mt-2' />
                </div>
            </div>
        )}
    />
  )
}

export default CustomInput