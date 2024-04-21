interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const sum = subject1.credits + subject2.credits;
  return { credits: sum, brand: 'Major' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const sum = subject1.credits + subject2.credits;
  return { credits: sum, brand: 'Minor' };
}
