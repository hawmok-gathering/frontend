'use client';

export default function LoginRequest() {
  const handleClick = () => {
    alert('로그인하세요 아직 미구현입니다');
  };
  return (
    <p className="text-center text-sm font-bold">
      로그인하면 나에게 딱 맞는 회식 장소를 추천받을 수 있어요
      <span className="mx-4">|</span>
      <span className="text-primary hover:cursor-pointer" onClick={handleClick}>
        로그인 하기 {'>'}
      </span>
    </p>
  );
}
