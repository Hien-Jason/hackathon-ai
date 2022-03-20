export default function QuestionOne () {
    return (
        <div>
            <p>Let&apos;s make the computer read numbers</p>
        
            <form>               
                <label htmlFor="digits">First, how many digits are there? (Hint: count your fingers!)</label><br/>
                <p></p>
                <input type="text" id="digits" name="digits"/><br/>
                <p></p>
                <input type="submit" value="Submit"/>    
            </form>
    			
            <Link href='q2'>
				<a className='badge badge-primary'>To Next Page</a>
			</Link>
        </div>
    )
}
