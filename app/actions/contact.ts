
   "use server"

   export async function submitContactForm(formData: FormData | null) {
     if (!formData) {
       console.error("FormData is null or undefined");
       return { success: false, message: "Invalid form submission." };
     }

     const name = formData.get("name") as string;
     const email = formData.get("email") as string;
     const subject = formData.get("subject") as string;
     const message = formData.get("message") as string;

     if (!name || !email || !subject || !message) {
       return { success: false, message: "All fields are required." };
     }

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
       return { success: false, message: "Please enter a valid email address." };
     }

     try {
       if (!process.env.RESEND_API_KEY) {
         console.error("RESEND_API_KEY missing");
         return { success: false, message: "Server configuration error: Missing API key." };
       }

       const { Resend } = await import("resend");
       const resend = new Resend(process.env.RESEND_API_KEY);

       const emailResponse = await resend.emails.send({
         from: "onboarding@resend.dev",
         to: "anyaibeebuka@gmail.com",
         subject: `New Contact: ${subject}`,
         html: `
           <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
             <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
               New Contact Form Submission
             </h2>
             <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
               <p><strong style="color: #3b82f6;">Name:</strong> ${name}</p>
               <p><strong style="color: #3b82f6;">Email:</strong> ${email}</p>
               <p><strong style="color: #3b82f6;">Subject:</strong> ${subject}</p>
             </div>
             <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
               <h3 style="color: #333; margin-top: 0;">Message:</h3>
               <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-radius: 8px;">
               <p style="margin: 0; color: #1e40af; font-size: 14px;">
                 <strong>Reply to:</strong> ${email}
               </p>
             </div>
           </div>
         `,
       });

       console.log("✅ Email sent:", emailResponse);
       return { success: true, message: "Thank you for your message! I'll get back to you soon." };
     } catch (error: any) {
       console.error("❌ Contact form error:", error.message, error.stack);
       return { success: false, message: "Failed to send message. Please try again later." };
     }
   }
   
