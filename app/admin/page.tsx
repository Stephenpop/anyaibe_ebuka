export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 gradient-text">Contact Form Status</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Email Integration Status */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-green-400">✅ Email Integration Active</h2>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong>Service:</strong> Resend
              </p>
              <p>
                <strong>Recipient:</strong> anyaibeebuka@gmail.com
              </p>
              <p>
                <strong>Status:</strong> <span className="text-green-400">Configured</span>
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">📧 How It Works</h2>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>• Form submissions send email to your inbox</p>
              <p>• Includes sender's contact details</p>
              <p>• Formatted for easy reading</p>
              <p>• Backup logged in Vercel functions</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <p className="text-gray-400">
            Check your email (anyaibeebuka@gmail.com) for contact form submissions.
            <br />
            You can also view function logs in your Vercel dashboard for backup records.
          </p>
        </div>
      </div>
    </div>
  )
}
