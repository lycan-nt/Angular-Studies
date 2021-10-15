import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseServices } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

    course: Course;

    constructor(
        private activateRoute: ActivatedRoute,
        private courseService: CourseServices
    ){}

    ngOnInit(): void {
        this.course = this.courseService.retriveById(+this.activateRoute.snapshot.paramMap.get("id"));
    }

    save() : void {
        this.courseService.save(this.course);
    }

}