'use client'

type Props = {
    tag: string
}

export default function RevalidateBtn({tag}: Props) {
    const handleClick = async () => {
        const res = await fetch('/api/revalidate?tag=' + tag , {
            method: 'POST'
        })
        console.log(res);
    }

    return <button onClick={handleClick}>캐시 비우기</button>
    
}