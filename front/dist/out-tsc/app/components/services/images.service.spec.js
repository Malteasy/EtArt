import { TestBed } from '@angular/core/testing';
import { ImagesService } from './images.service';
describe('ImagesService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ImagesService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=images.service.spec.js.map