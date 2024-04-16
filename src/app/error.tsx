'use client'

import { useEffect } from "react";

/**
 * 에러 페에지는 반드시 클라이언트 컴포넌트여야 한다
 */

type Props = {
    error: Error;
    reset: () => void;
}
export default function Error({error, reset}: Props) {

    useEffect(() => {
        console.log(error.message)
    },[]);

    return (
        <>
            <h1>에러페이지</h1>
            <button onClick={reset}>새로고침</button>
        </>
    )
}