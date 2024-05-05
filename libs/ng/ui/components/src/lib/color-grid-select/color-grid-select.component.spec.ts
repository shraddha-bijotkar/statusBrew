import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorGridSelectComponent } from './color-grid-select.component';

describe('ColorGridSelectComponent', () => {
  let component: ColorGridSelectComponent;
  let fixture: ComponentFixture<ColorGridSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorGridSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorGridSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //grid method 
  it('should return correct chunk as expected', () => {
    component['_itemsPerRow'] = 6;
    component.items = ['1', '2', '3', '4', '5', '6'];
    expect(component.grid()).toEqual(component.items);
  });

  //calculateGrid method 
  describe('calculateGrid', () => {
    beforeEach(() => {
      jest.spyOn(component, 'grid').mockImplementation(jest.fn());
    });
    it('should call grid method', () => {
      component['calculateGrid']();
      expect(component.grid).toHaveBeenCalled();
    });

    it('should update items per row as expected', () => {
      component.gridElement.nativeElement.offsetWidth = 640;
      component['calculateGrid']();
      expect(component['_itemsPerRow']).toEqual(20);
    });

  });

});
