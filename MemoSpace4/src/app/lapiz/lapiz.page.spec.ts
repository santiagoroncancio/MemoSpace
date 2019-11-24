import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LapizPage } from './lapiz.page';

describe('LapizPage', () => {
  let component: LapizPage;
  let fixture: ComponentFixture<LapizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapizPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LapizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
