import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseServices } from './course.service'

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy: String;

    constructor(
        private courseServices: CourseServices
    ) {}

    ngOnInit(): void {
        this._courses = this.courseServices.retriveAll();
        this.filteredCourses = this._courses;
    }

    set filter(value: String) {
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }

}