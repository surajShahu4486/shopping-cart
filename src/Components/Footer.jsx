import React from 'react'

const Footer = () => {
  return (
    <>
    {/* Footer */}
      <footer className="bg-blue-900 text-white py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <p>© 2026 MyWebsite. All Rights Reserved.</p>

          <div className="flex gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer