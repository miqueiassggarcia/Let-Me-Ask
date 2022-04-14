import { useState } from "react";
import { useParams } from "react-router-dom";

import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";

import "../styles/room.scss";
import { useRoom } from "../hooks/useRoom";

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState("");
  const roomId = params.id!;
  
  const { questions, title } = useRoom(roomId);

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="LetMeAsk" />
           <div>
            <RoomCode code={roomId} />
            <Button isOutLined>Encerrar sala</Button>
           </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
        </div>
        
        <div className="question-list">
          {questions.map(question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            )
          })}
        </div>
      </main>
    </div>
  );
}