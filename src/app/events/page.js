import Wrapper from "@/components/wrapper/wrapper";
import Link from "next/link";

export default function Events() {
    return (
        <div>
            <Wrapper>
                <h1>Виставки та події</h1>
                <h2>
                    Тут поки що пусто, але щось прекрасне проростає просто
                    зараз! 🌱
                </h2>
                <Link href="events/event-1">Test Link to Event 1</Link>
            </Wrapper>
        </div>
    );
}
