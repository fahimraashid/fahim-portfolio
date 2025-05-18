"use client";

import { useState, useEffect } from "react";
import { motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send, Mail, Phone, Linkedin, MapPin, Github } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll be in touch soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "fahim@example.com",
      href: "mailto:fahim@example.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+971 50 123 4567",
      href: "tel:+97150123456",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/fahim",
      href: "https://linkedin.com/in/fahim",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Dubai, United Arab Emirates",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400"
          >
            Get in Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...form.register("name")}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    />
                    {form.formState.errors.name && (
                      <p className="mt-1 text-sm text-red-400">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...form.register("email")}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    />
                    {form.formState.errors.email && (
                      <p className="mt-1 text-sm text-red-400">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      {...form.register("company")}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    />
                    {form.formState.errors.company && (
                      <p className="mt-1 text-sm text-red-400">{form.formState.errors.company.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...form.register("message")}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    />
                    {form.formState.errors.message && (
                      <p className="mt-1 text-sm text-red-400">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-3 text-purple-400" />
                    fahimraashid@gmail.com
                  </p>
                  <p className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3 text-purple-400" />
                    +971 56 48x xx xx
                  </p>
                  <p className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                    UAE, Dubai
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Connect with Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-purple-400" />
                  </a>
                  <a
                    href="https://twitter.com/your-handle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Twitter className="w-6 h-6 text-purple-400" />
                  </a>
                  <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-6 h-6 text-purple-400" />
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;