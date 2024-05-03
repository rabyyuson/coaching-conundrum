import Link from "next/link";
import constants from "@/constants.json";
import Image from "next/image";

export default async function Login() {
    const { logins } = constants;

    return (
        <div className="flex flex-col gap-10 items-center">
            <h2 className="text-xl font-semibold text-slate-800">Select a login:</h2>
            <ul className="flex flex-row gap-5">
                {logins.map((login, index) => (
                    <li
                        className="group"
                        key={index}
                    >
                        <Link
                            className="drop-shadow-md bg-white border border-slate-200 flex flex-col gap-5 items-center p-5 rounded-xl transition duration-200 ease-in-out group-hover:-translate-y-2 group-hover:bg-orange-500 h-full"
                            href={login.url}
                        >
                            <Image
                                className="p-2 bg-white rounded-full transition duration-300 ease-in-out group-hover:drop-shadow-md"
                                alt={login.name}
                                src={login.imageUrl}
                                width={150}
                                height={150}
                            />
                            <div className="text-center text-base uppercase font-bold text-slate-900 transition duration-300 ease-in-out group-hover:text-white">{login.name}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
