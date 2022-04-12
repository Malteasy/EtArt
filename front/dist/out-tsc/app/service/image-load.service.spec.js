import { TestBed } from '@angular/core/testing';
import { ImageLoadService } from './image-load.service';
describe('ImageLoadService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ImageLoadService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=image-load.service.spec.js.map