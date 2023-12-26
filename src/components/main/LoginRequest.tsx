'use client';

export default function LoginRequest() {
  const handleClick = () => {
    alert('로그인하세요 아직 미구현입니다');
  };
  return (
    <p className="whitespace-nowrap text-center text-[10px] font-bold sm:text-sm">
      로그인하여 나와 딱 맞춘 회식 장소를 추천받으세요!
      <span className="mx-3 text-primary">|</span>
      <span className="text-primary hover:cursor-pointer" onClick={handleClick}>
        로그인 하기 {'>'}
      </span>
    </p>
  );
}
