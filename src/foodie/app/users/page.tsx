import type { Metadata } from "next"
import Link from "next/link"
import getAllUsers from "@/lib/getAllUsers"

export const metadata: Metadata = {
    title: 'Users',
}

export default async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers()
    
    const users = await usersData

    const content = (
        <section>
            <h2>
                <Link href={"/"}>Back to home</Link>
                <br />
                {users.map(user => {
                    return (
                        <>
                            <p key={user.id}>
                                <Link href={`/users/${user.id}`}>{user.name}</Link>
                            </p>
                            <br />                    
                        </>
                    )
                })}
            </h2>
        </section>
    )

    return content
}
