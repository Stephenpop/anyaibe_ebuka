"use server"

import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

interface ContactSubmission {
  id: string
  name: string
  email: string
  subject: string
  message: string
  timestamp: string
}

const SUBMISSIONS_FILE = path.join(process.cwd(), "data", "submissions.json")

async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), "data")
  if (!existsSync(dataDir)) {
    await mkdir(dataDir, { recursive: true })
  }
}

async function getSubmissions(): Promise<ContactSubmission[]> {
  try {
    await ensureDataDirectory()
    if (!existsSync(SUBMISSIONS_FILE)) {
      return []
    }
    const data = await readFile(SUBMISSIONS_FILE, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading submissions:", error)
    return []
  }
}

async function saveSubmission(submission: ContactSubmission) {
  try {
    await ensureDataDirectory()
    const submissions = await getSubmissions()
    submissions.push(submission)
    await writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2))
  } catch (error) {
    console.error("Error saving submission:", error)
  }
}

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "All fields are required.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    // Create submission object
    const submission: ContactSubmission = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    }

    // Save to file
    await saveSubmission(submission)

    // Log to console (you'll see this in your terminal when running the app)
    console.log("📧 New Contact Form Submission:")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Subject:", subject)
    console.log("Message:", message)
    console.log("Time:", new Date().toLocaleString())
    console.log("---")

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again.",
    }
  }
}

export async function getContactSubmissions() {
  return await getSubmissions()
}
