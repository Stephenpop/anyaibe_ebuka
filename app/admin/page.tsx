import { getContactSubmissions } from "../actions/contact"

export default async function AdminPage() {
  const submissions = await getContactSubmissions()

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 gradient-text">Contact Form Submissions</h1>

        {submissions.length === 0 ? (
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <p className="text-gray-400">No submissions yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {submissions.reverse().map((submission) => (
              <div key={submission.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{submission.name}</h3>
                    <p className="text-blue-400">{submission.email}</p>
                  </div>
                  <div className="text-sm text-gray-400">{new Date(submission.timestamp).toLocaleString()}</div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-300 mb-2">Subject:</h4>
                  <p className="text-white">{submission.subject}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-300 mb-2">Message:</h4>
                  <p className="text-white whitespace-pre-wrap">{submission.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
