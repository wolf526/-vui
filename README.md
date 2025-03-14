import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const questions = [
  {
    question: "Thủ đô của Việt Nam là gì?",
    options: ["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Huế"],
    answer: "Hà Nội",
  },
  {
    question: "Nước nào có diện tích lớn nhất thế giới?",
    options: ["Mỹ", "Trung Quốc", "Nga", "Canada"],
    answer: "Nga",
  },
  {
    question: "Ai là người sáng lập Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
    answer: "Bill Gates",
  },
  {
    question: "Kim tự tháp lớn nhất thế giới nằm ở đâu?",
    options: ["Ai Cập", "Mexico", "Peru", "Trung Quốc"],
    answer: "Mexico",
  },
  {
    question: "Cầu thủ nào có nhiều Quả bóng vàng nhất?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Pelé", "Maradona"],
    answer: "Lionel Messi",
  },
  {
    question: "Nguyên tố hóa học nào có ký hiệu là 'O'?",
    options: ["Oxy", "Vàng", "Bạc", "Sắt"],
    answer: "Oxy",
  },
  [
  {
    "question": "Hành tinh nào gần Mặt Trời nhất?",
    "options": ["Sao Kim", "Sao Thủy", "Sao Hỏa", "Sao Mộc"],
    "answer": "Sao Thủy"
  },
  {
    "question": "Năm nào Việt Nam giành chức vô địch AFF Cup lần đầu tiên?",
    "options": ["2008", "2018", "2004", "1998"],
    "answer": "2008"
  },
  {
    "question": "Ai là nhà bác học phát minh ra bóng đèn?",
    "options": ["Albert Einstein", "Isaac Newton", "Thomas Edison", "Nikola Tesla"],
    "answer": "Thomas Edison"
  },
  {
    "question": "Bộ phim hoạt hình nào của Disney có nhân vật chính là một chú sư tử tên Simba?",
    "options": ["Vua Sư Tử", "Nàng Tiên Cá", "Người Đẹp và Quái Vật", "Công Chúa Tóc Mây"],
    "answer": "Vua Sư Tử"
  },
  {
    "question": "Loại gỗ nào được dùng nhiều nhất để làm đũa ở Việt Nam?",
    "options": ["Tre", "Gỗ lim", "Gỗ thông", "Gỗ hương"],
    "answer": "Tre"
  },
  {
    "question": "Quốc gia nào có dân số đông nhất thế giới?",
    "options": ["Mỹ", "Ấn Độ", "Trung Quốc", "Brazil"],
    "answer": "Trung Quốc"
  },
  {
    "question": "Châu lục nào có diện tích lớn nhất?",
    "options": ["Châu Phi", "Châu Âu", "Châu Á", "Châu Mỹ"],
    "answer": "Châu Á"
  },
  {
    "question": "Truyện 'Doraemon' có bao nhiêu bảo bối thần kỳ?",
    "options": ["Hơn 500", "Hơn 1000", "Hơn 2000", "Hơn 10,000"],
    "answer": "Hơn 2000"
  },
  {
    "question": "Tác phẩm nào sau đây không phải của nhà văn Nam Cao?",
    "options": ["Chí Phèo", "Lão Hạc", "Vợ Nhặt", "Sống Mòn"],
    "answer": "Vợ Nhặt"
  },
  {
    "question": "Quốc kỳ của Nhật Bản có màu gì?",
    "options": ["Đỏ và Trắng", "Xanh và Đỏ", "Vàng và Đen", "Trắng và Xanh"],
    "answer": "Đỏ và Trắng"
  }
[
  {
    "question": "Loài chim nào có thể bắt chước giọng nói của con người?",
    "options": ["Chim đại bàng", "Chim két", "Chim bồ câu", "Chim sẻ"],
    "answer": "Chim két"
  },
  {
    "question": "Sông nào dài nhất thế giới?",
    "options": ["Sông Nile", "Sông Amazon", "Sông Mississippi", "Sông Mekong"],
    "answer": "Sông Nile"
  },
  {
    "question": "Bộ phim nào sau đây được sản xuất bởi Studio Ghibli?",
    "options": ["Your Name", "Spirited Away", "A Silent Voice", "Weathering With You"],
    "answer": "Spirited Away"
  },
  {
    "question": "Thế vận hội Olympic mùa hè 2024 được tổ chức tại đâu?",
    "options": ["Paris", "Tokyo", "Los Angeles", "London"],
    "answer": "Paris"
  },
  {
    "question": "Ai là tổng thống đầu tiên của Hoa Kỳ?",
    "options": ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    "answer": "George Washington"
  },
  {
    "question": "Ngôn ngữ nào được sử dụng nhiều nhất trên thế giới?",
    "options": ["Tiếng Anh", "Tiếng Tây Ban Nha", "Tiếng Trung Quốc", "Tiếng Ả Rập"],
    "answer": "Tiếng Trung Quốc"
  },
  {
    "question": "Đơn vị đo cường độ âm thanh là gì?",
    "options": ["Hertz", "Decibel", "Watt", "Joule"],
    "answer": "Decibel"
  },
  {
    "question": "Nghệ sĩ nào từng được gọi là 'Ông hoàng nhạc Pop'?",
    "options": ["Elvis Presley", "Freddie Mercury", "Michael Jackson", "Justin Bieber"],
    "answer": "Michael Jackson"
  },
  {
    "question": "Bộ truyện tranh nào sau đây không phải của Nhật Bản?",
    "options": ["Dragon Ball", "Naruto", "One Piece", "Marvel Comics"],
    "answer": "Marvel Comics"
  },
  {
    "question": "Hệ điều hành nào được sử dụng trên điện thoại iPhone?",
    "options": ["Android", "iOS", "Windows", "Linux"],
    "answer": "iOS"
  }
[
  {
    "question": "Loài chim nào có thể bắt chước giọng nói của con người?",
    "options": ["Chim đại bàng", "Chim két", "Chim bồ câu", "Chim sẻ"],
    "answer": "Chim két"
  },
  {
    "question": "Sông nào dài nhất thế giới?",
    "options": ["Sông Nile", "Sông Amazon", "Sông Mississippi", "Sông Mekong"],
    "answer": "Sông Nile"
  },
  {
    "question": "Bộ phim nào sau đây được sản xuất bởi Studio Ghibli?",
    "options": ["Your Name", "Spirited Away", "A Silent Voice", "Weathering With You"],
    "answer": "Spirited Away"
  },
  {
    "question": "Thế vận hội Olympic mùa hè 2024 được tổ chức tại đâu?",
    "options": ["Paris", "Tokyo", "Los Angeles", "London"],
    "answer": "Paris"
  },
  {
    "question": "Ai là tổng thống đầu tiên của Hoa Kỳ?",
    "options": ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    "answer": "George Washington"
  },
  {
    "question": "Ngôn ngữ nào được sử dụng nhiều nhất trên thế giới?",
    "options": ["Tiếng Anh", "Tiếng Tây Ban Nha", "Tiếng Trung Quốc", "Tiếng Ả Rập"],
    "answer": "Tiếng Trung Quốc"
  },
  {
    "question": "Đơn vị đo cường độ âm thanh là gì?",
    "options": ["Hertz", "Decibel", "Watt", "Joule"],
    "answer": "Decibel"
  },
  {
    "question": "Nghệ sĩ nào từng được gọi là 'Ông hoàng nhạc Pop'?",
    "options": ["Elvis Presley", "Freddie Mercury", "Michael Jackson", "Justin Bieber"],
    "answer": "Michael Jackson"
  },
  {
    "question": "Bộ truyện tranh nào sau đây không phải của Nhật Bản?",
    "options": ["Dragon Ball", "Naruto", "One Piece", "Marvel Comics"],
    "answer": "Marvel Comics"
  },
  {
    "question": "Hệ điều hành nào được sử dụng trên điện thoại iPhone?",
    "options": ["Android", "iOS", "Windows", "Linux"],
    "answer": "iOS"
  }
[
  {
    "question": "Loại kim loại nào dẫn điện tốt nhất?",
    "options": ["Vàng", "Nhôm", "Đồng", "Bạc"],
    "answer": "Bạc"
  },
  {
    "question": "Hành tinh nào được gọi là 'Hành tinh đỏ'?",
    "options": ["Sao Kim", "Sao Hỏa", "Sao Mộc", "Sao Thủy"],
    "answer": "Sao Hỏa"
  },
  {
    "question": "Người Việt Nam đầu tiên bay vào vũ trụ là ai?",
    "options": ["Phạm Tuân", "Nguyễn Thành Trung", "Võ Nguyên Giáp", "Trần Đại Nghĩa"],
    "answer": "Phạm Tuân"
  },
  {
    "question": "Ai là người sáng lập Facebook?",
    "options": ["Elon Musk", "Bill Gates", "Mark Zuckerberg", "Steve Jobs"],
    "answer": "Mark Zuckerberg"
  },
  {
    "question": "Bức tranh Mona Lisa do ai vẽ?",
    "options": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
    "answer": "Leonardo da Vinci"
  },
  {
    "question": "Ai là nhà phát minh ra bóng đèn điện?",
    "options": ["Nikola Tesla", "Albert Einstein", "Thomas Edison", "Isaac Newton"],
    "answer": "Thomas Edison"
  },
  {
    "question": "Loài động vật nào ngủ nhiều nhất?",
    "options": ["Gấu trúc", "Dơi nâu", "Lười", "Mèo"],
    "answer": "Dơi nâu"
  },
  {
    "question": "Ai là cầu thủ ghi nhiều bàn thắng nhất trong lịch sử World Cup?",
    "options": ["Cristiano Ronaldo", "Pelé", "Miroslav Klose", "Diego Maradona"],
    "answer": "Miroslav Klose"
  },
  {
    "question": "Bộ phim nào có doanh thu cao nhất mọi thời đại?",
    "options": ["Avatar", "Avengers: Endgame", "Titanic", "The Lion King"],
    "answer": "Avatar"
  },
  {
    "question": "Quốc gia nào có dân số thấp nhất thế giới?",
    "options": ["San Marino", "Liechtenstein", "Vatican", "Monaco"],
    "answer": "Vatican"
  },
  {
    "question": "Đơn vị tiền tệ của Nhật Bản là gì?",
    "options": ["Nhân dân tệ", "Yên", "Won", "Đô la"],
    "answer": "Yên"
  },
  {
    "question": "Loại trái cây nào chứa nhiều vitamin C nhất?",
    "options": ["Cam", "Ổi", "Chanh", "Dâu tây"],
    "answer": "Ổi"
  },
  {
    "question": "Bài quốc ca của Việt Nam tên là gì?",
    "options": ["Lên đàng", "Tiến quân ca", "Như có Bác trong ngày vui đại thắng", "Việt Nam quê hương tôi"],
    "answer": "Tiến quân ca"
  },
  {
    "question": "Con vật nào là biểu tượng của nước Úc?",
    "options": ["Gấu trúc", "Hổ", "Chuột túi", "Đại bàng"],
    "answer": "Chuột túi"
  },
  {
    "question": "Nước nào nổi tiếng với món Sushi?",
    "options": ["Trung Quốc", "Thái Lan", "Nhật Bản", "Hàn Quốc"],
    "answer": "Nhật Bản"
  },
  {
    "question": "Loài hoa nào được xem là biểu tượng của tình yêu?",
    "options": ["Hoa cúc", "Hoa hướng dương", "Hoa hồng", "Hoa lan"],
    "answer": "Hoa hồng"
  },
  {
    "question": "Ai là tác giả của bộ truyện tranh 'Doraemon'?",
    "options": ["Akira Toriyama", "Eiichiro Oda", "Fujiko F. Fujio", "Masashi Kishimoto"],
    "answer": "Fujiko F. Fujio"
  },
  {
    "question": "Người sáng lập ra hãng Apple là ai?",
    "options": ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Elon Musk"],
    "answer": "Steve Jobs"
  },
  {
    "question": "Bộ phận nào trên cơ thể con người không thể tự lành khi bị tổn thương?",
    "options": ["Da", "Gan", "Tim", "Răng"],
    "answer": "Răng"
  },
  {
    "question": "Thành phố nào ở Việt Nam được gọi là 'Thành phố ngàn hoa'?",
    "options": ["Đà Nẵng", "Đà Lạt", "Hà Nội", "Huế"],
    "answer": "Đà Lạt"
  },
  {
    "question": "Vị vua nào của Việt Nam có thời gian trị vì dài nhất?",
    "options": ["Lý Thái Tổ", "Lê Lợi", "Vua Gia Long", "Vua Bảo Đại"],
    "answer": "Vua Gia Long"
  },
  {
    "question": "Nhóm máu hiếm nhất trên thế giới là gì?",
    "options": ["A", "B", "O", "AB Rh-null"],
    "answer": "AB Rh-null"
  },
  {
    "question": "Bộ xương người có bao nhiêu chiếc xương?",
    "options": ["180", "206", "250", "300"],
    "answer": "206"
  },
  {
    "question": "Bộ phim hoạt hình nào có nhân vật chính là một con rồng tên Toothless?",
    "options": ["Kung Fu Panda", "Frozen", "How to Train Your Dragon", "Shrek"],
    "answer": "How to Train Your Dragon"
  },
  {
    "question": "Màu sắc nào thường gắn liền với sự may mắn ở Trung Quốc?",
    "options": ["Xanh", "Đỏ", "Vàng", "Trắng"],
    "answer": "Đỏ"
  },
  {
    "question": "Quốc gia nào nổi tiếng với món Pasta?",
    "options": ["Pháp", "Ý", "Tây Ban Nha", "Mỹ"],
    "answer": "Ý"
  },
  {
    "question": "Ai là nhà khoa học phát minh ra thuyết tương đối?",
    "options": ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Stephen Hawking"],
    "answer": "Albert Einstein"
  },
  {
    "question": "Ca sĩ nào được mệnh danh là 'Ông hoàng nhạc Việt'?",
    "options": ["Đàm Vĩnh Hưng", "Sơn Tùng M-TP", "Mỹ Tâm", "Hồ Ngọc Hà"],
    "answer": "Đàm Vĩnh Hưng"
  },
  {
    "question": "Năm nào Việt Nam tuyên bố độc lập?",
    "options": ["1930", "1945", "1954", "1975"],
    "answer": "1945"
  }
  {
    question: "Ai là tác giả của 'Truyện Kiều'?",
    options: ["Nguyễn Du", "Hồ Xuân Hương", "Nguyễn Trãi", "Xuân Diệu"],
    answer: "Nguyễn Du",
  }
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <CardContent>
          {showResult ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Kết quả</h2>
              <p>Bạn đã trả lời đúng {score} / {questions.length} câu hỏi.</p>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
              {questions[currentQuestion].options.map((option) => (
                <Button key={option} className="w-full mb-2" onClick={() => handleAnswerClick(option)}>
                  {option}
                </Button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
