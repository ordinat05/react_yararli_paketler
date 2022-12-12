import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toastify() {
	const notify = () => toast("Wow so easy!");

	return (
		<div style={{ textAlign: "center" }}>
			{/* text-align: center; */}
			<button button onClick={notify} > Bildirim Gönder!</button >
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>

		</div >
	)
}

export default Toastify
