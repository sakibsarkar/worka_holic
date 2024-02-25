const Contact = () => {
    return (
        <div className="bg-gray-100 py-10">
          <h1 className="mt-8 mb-8 text-center text-4xl font-bold">
        Contact <span className="text-primary-color">Us</span>
      </h1>
         <form className="bg-gray-300 max-w-md mx-auto p-8 rounded-md">
            <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="">Your Name</label>
                <input placeholder="John Doe" className="w-full mb-4 px-3 py-2 border rounded-lg bg-gray-50 focus:border-green-600" required type="text" />
            </div>
            <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="">Your Email</label>
                <input placeholder="john@example.com" className="w-full mb-4 px-3 py-2 border rounded-lg bg-gray-50 focus:border-green-600" required type="email" />
            </div>
            <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="">Your Message</label>
                <textarea rows='6' placeholder="Type your message here..." className="w-full mb-4 px-3 py-2 border rounded-lg bg-gray-50 focus:border-green-600" required type="text" />
            </div>
            <div>
            <button type={'button'} className={"w-full btn text-white bg-primary-color border hover:bg-gray-600 rounded hover:text-white "}>
                    Send Message
            </button>
            </div>
         </form>
        </div>
    );
};

export default Contact;