export class CreateSeminarDto {
  courseCode: number;
  semester: number;
  year: number;
  name: string;
  teachers: any[];
  type: string;
  levelName: string;
}
