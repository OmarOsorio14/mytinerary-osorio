import React,{useEffect} from 'react'
import Alert from '../components/Alert'

export default function Error() {
	useEffect(()=>{
		window.scrollTo(0, 0)
	},[])

	return (
		<Alert type="error" title="Error 404" message="this resource doesn't exist yet" />
	)
}
