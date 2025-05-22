import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white px-6 py-8 border-t">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
                <div>
                    <h4 className="text-xl font-bold text-black mb-2">Vikram Site</h4>
                    <p className="text-sm text-gray-600 max-w-xs">
                        Your journey to new skills starts here — learn from the best, on your time.
                    </p>
                </div>
                <div>
                    <h5 className="font-semibold mb-2">Company</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>Blogs</li>
                        <li>Careers</li>
                        <li>News</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold mb-2">Resources</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>Documentation</li>
                        <li>Papers</li>
                        <li>Plans & Pricing</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer