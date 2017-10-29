import { Component } from '@nestjs/common';
import { CreateInternDto } from '../dtos/create-intern.dto';
import { CreateProjectAndSpecialProblemDto } from '../dtos/create-project-and-special-problem.dto';
const CO_ADVISOR = 'coAdvisor';
const CHAIRMAN = 'chairman';
const ADVISOR = 'advisor';
@Component()
export class ProjectAndSpecialProblemCalculate {

  private createProjectAndSpecialProblemDto: CreateProjectAndSpecialProblemDto;
  private pointCoAdvisor: number;
  private pointAdvisor: number;
  private pointChairman: number;
  private pointPerCoAdvisor: number;
  constructor() { }
  calculate(createProjectAndSpecialProblemDto: CreateProjectAndSpecialProblemDto) {
    this.createProjectAndSpecialProblemDto = createProjectAndSpecialProblemDto;
    this.pointChairman = this.createProjectAndSpecialProblemDto.credit;
    this.pointAdvisor = this.createProjectAndSpecialProblemDto.credit;
    this.pointCoAdvisor = this.createProjectAndSpecialProblemDto.credit / 2;

    this.AssignToTeachers()
    return this.createProjectAndSpecialProblemDto;
  }
  calculateCoAdvisor() {
    const countCoAdvisor = this.createProjectAndSpecialProblemDto
      .teachers.filter((teacher) => teacher.appointment == CO_ADVISOR).length
    this.pointPerCoAdvisor = (this.pointCoAdvisor) / countCoAdvisor
  }
  AssignToTeachers(): any {
    this.createProjectAndSpecialProblemDto.teachers.forEach((teacher) => {
      switch (teacher.appointment) {
        case CHAIRMAN:
          teacher.point = this.pointChairman;
          break;
        case ADVISOR:
          teacher.point = this.pointAdvisor;
          break;
        case CO_ADVISOR:
          teacher.point = this.pointCoAdvisor;
          break;
        default:
          teacher.point = 0;
          break;
      }
    })
  }
}
