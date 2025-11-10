import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import * as React from "react"

export function FormField({
  label,
  id,
  type = "text",
  placeholder,
  className,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
  className?: string
}) {
  return (
    <label htmlFor={id} className={cn("block text-left space-y-2", className)}>
      <span className="text-sm font-medium text-[#27408E]">{label}</span>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-12 rounded-lg border-[#dfe6ff] bg-white/60 backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-[#0F4BFF] focus-visible:border-[#0F4BFF] placeholder:text-[#27408E]/40 text-[#0D193E]"
      />
    </label>
  )
}

export function TextAreaField({
  label,
  id,
  placeholder,
  className,
}: {
  label: string
  id: string
  placeholder?: string
  className?: string
}) {
  return (
    <label htmlFor={id} className={cn("block text-left space-y-2", className)}>
      <span className="text-sm font-medium text-[#27408E]">{label}</span>
      <textarea
        id={id}
        placeholder={placeholder}
        className="min-h-[140px] w-full resize-y rounded-lg border border-[#dfe6ff] bg-white/60 px-3 py-3 text-base text-[#0D193E] placeholder:text-[#27408E]/40 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4BFF] focus-visible:border-[#0F4BFF]"
      />
    </label>
  )
}
