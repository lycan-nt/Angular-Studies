import { Course } from './../model/course';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;

  @Output('courseSelected')
  courseEmiter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed() {
    console.log("Card Component - button clicked...")
    this.courseEmiter.emit(this.course)
  }

}
